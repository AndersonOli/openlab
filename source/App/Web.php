<?php
namespace Source\App;

class Web
{
    public function home($data)
    {
        require_once "source/views/site/index.php";
    }

    public function admin($data)
    {
        require_once "source/views/admin/index.php";
    }

    public function login($data)
    {
        require_once "source/views/admin/login.php";
    }

    public function logout($data)
    {
        session_start();
        session_destroy();
        header('location: /login');
    }

    public function erro($data)
    {
        if($data["code"] == 404){
            require_once "source/views/erros/404.html";
        }
    }
}