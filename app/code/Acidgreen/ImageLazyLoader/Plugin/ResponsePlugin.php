<?php

namespace Acidgreen\ImageLazyLoader\Plugin;

class ResponsePlugin {

    public function aroundsendContent(\Zend\Http\PhpEnvironment\Response $response, callable $proceed) {
        $content = $response->getContent();
        
        $content = preg_replace("/(?<=img)(.*)src/Ui", "$1data-src", $content);

        $response->setContent($content);
        return $proceed();
    }
}

