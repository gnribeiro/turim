<?php

Class Gwp_Captcha{

  public  $config = array();

  public function __construct()
  {
     if( !function_exists('gd_info') ) {
        throw new Exception('Required GD library is missing');
    }

    if (isset($_SESSION['GWP_captcha']) && !empty($_SESSION['GWP_captcha'])) {
        unset($_SESSION['GWP_captcha']);
    }

    $this->settings();
    $this->generate_capacha();

  }

  public function settings()
  {
     $font_path     = THEMEPATH . 'assets/fonts/';
     $bg_path = THEMEPATH . 'assets/images/';

     $this->img_width  = 100;
     $this->img_height = 30;

    $this->config = array(
      'code' => '',
      'min_length' => 7,
      'max_length' => 7,
      'backgrounds' => array(
        $bg_path . 'captcha.png'
        ),
      'fonts' => array(
        $font_path . 'lato-regular.ttf'
      ),
      'characters'      => 'ABCDEFGHJKLMNPRSTUVWXYZabcdefghjkmnprstuvwxyz123456789',
      'min_font_size'   => 16,
      'max_font_size'   => 16,
      'color'           => '#ffffff',
      'angle_min'       => 0,
      'angle_max'       => 0,
      'shadow'          => false,
      'shadow_color'    => '#fff',
      'shadow_offset_x' => -1,
      'shadow_offset_y' => 1
    );
  }


    public function generate_capacha()
    {
        if( empty($this->config['code']) )
        {
            $this->config['code'] = '';
            $length = mt_rand($this->config['min_length'], $this->config['max_length']);

            while( strlen($this->config['code']) < $length )
            {
                $this->config['code'] .= substr($this->config['characters'], mt_rand() % (strlen($this->config['characters'])), 1);
            }
        }
    }



    public   function hex2rgb($hex_str, $return_string = false, $separator = ','){
        $hex_str = preg_replace("/[^0-9A-Fa-f]/", '', $hex_str);
        $rgb_array = array();

        if( strlen($hex_str) == 6 )
        {
            $color_val = hexdec($hex_str);
            $rgb_array['r'] = 0xFF & ($color_val >> 0x10);
            $rgb_array['g'] = 0xFF & ($color_val >> 0x8);
            $rgb_array['b'] = 0xFF & $color_val;
        }

        elseif( strlen($hex_str) == 3 )
        {
            $rgb_array['r'] = hexdec(str_repeat(substr($hex_str, 0, 1), 2));
            $rgb_array['g'] = hexdec(str_repeat(substr($hex_str, 1, 1), 2));
            $rgb_array['b'] = hexdec(str_repeat(substr($hex_str, 2, 1), 2));
        }
        else
        {
            return false;
        }

        return $return_string ? implode($separator, $rgb_array) : $rgb_array;
    }


    public function create() {

        $config = $this->config;
        //$img = imagecreatetruecolor( $this->img_width, $this->img_height);
        $background = $config['backgrounds'][0];

        list($bg_width, $bg_height, $bg_type, $bg_attr) = getimagesize($background);

        $captcha   = imagecreatefrompng($background);
        $color     = $this->hex2rgb($config['color']);
        $color     = imagecolorallocate($captcha, $color['r'], $color['g'], $color['b']);
        $font      = $config['fonts'][0];
        $font_size = $config['max_font_size'];

        if( !file_exists($font) )
            throw new Exception('Font file not found: ' . $font);



        if(function_exists('imagettfbbox') && function_exists('imagettftext') ){
            $text_box_size =imagettfbbox($font_size, 0, $font, $config['code']);


            // Determine text position
            $box_width = abs($text_box_size[6] - $text_box_size[2]);
            $box_height = abs($text_box_size[5] - $text_box_size[1]);
            $text_pos_x_min = 0;
            $text_pos_x_max = ($bg_width) - ($box_width);
            $text_pos_x = mt_rand($text_pos_x_min, $text_pos_x_max);
            $text_pos_y_min = $box_height;
            $text_pos_y_max = ($bg_height) - ($box_height / 2);

            if ($text_pos_y_min > $text_pos_y_max) {
                $temp_text_pos_y = $text_pos_y_min;
                $text_pos_y_min = $text_pos_y_max;
                $text_pos_y_max = $temp_text_pos_y;
            }
            $text_pos_y = mt_rand($text_pos_y_min, $text_pos_y_max);
            imagettftext($captcha, $font_size, $angle, $text_pos_x, $text_pos_y, $color, $font, $config['code']);
        }
        else {
            $size     = (imagesx($captcha) - 7.5 * strlen($config['code'])) / 2;
            imagestring($captcha, 17, $size, 15, $config['code'], $color);
        }

        list($usec, $sec) = explode(" ", microtime());
        $now      = ((float)$usec + (float)$sec);
        $img_name =  $now . '.png';
        $img_path = wp_upload_dir();
        $path     = $img_path['path'].DIRECTORY_SEPARATOR . $img_name;
        $url      = $img_path['baseurl'].$img_path['subdir'].DIRECTORY_SEPARATOR.$img_name;

        imagepng($captcha, $path);

        $_SESSION['GWP_captcha'] = array(
            "code"  => $config['code'],
            'url'   => $url,
            'path' => $path
        );
        ImageDestroy($captcha);

    }

    public  function __destruct() {

    }
}

?>