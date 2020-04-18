<?php
namespace Source\App;

class Web
{
    public function home($data)
    {
        require_once "source/views/site/index.php";
    }

    public function erro($data)
    {
        if($data["code"] == 404){
            require_once "source/views/erros/404.html";
        }
    }
}