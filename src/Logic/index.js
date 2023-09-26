import model from "./App Logic/model";
import view from "./DOM Logic/view";
import controller from "./DOM Logic/controller";

const pageModel = model();
const pageView = view();
const pageController = controller(pageModel, pageView);

pageView.setController(pageController);
