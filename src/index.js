import model from "./Logic/Model/model";
import view from "./Logic/Views/view";
import controller from "./Logic/Controllers/controller";

const $model = new model();
const $view = new view();
const $controller = new controller($model, $view);
$view.controller = $controller;

$controller.initializePage();
