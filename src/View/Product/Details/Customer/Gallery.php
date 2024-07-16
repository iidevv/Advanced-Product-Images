<?php

namespace Iidev\AdvancedProductImages\View\Product\Details\Customer;

use XCart\Extender\Mapping\Extender as Extender;

/**
 * @Extender\Mixin
 */
class Gallery extends \XLite\View\Product\Details\Customer\Gallery
{
    protected function getDefaultTemplate()
    {
        return 'modules/Iidev/AdvancedProductImages/product/details/parts/gallery.twig';
    }

       public function getJSFiles()
    {
        $list = parent::getJSFiles();
        $list[] = 'modules/Iidev/AdvancedProductImages/js/fancybox.umd.js';
        $list[] = 'modules/Iidev/AdvancedProductImages/js/main.js';

        return $list;
    }
    public function getCSSFiles()
    {
        $list = parent::getCSSFiles();
        $list[] = 'modules/Iidev/AdvancedProductImages/css/fancybox.css';
        $list[] = 'modules/Iidev/AdvancedProductImages/css/main.css';

        return $list;
    }
}