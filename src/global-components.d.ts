// Base components
import BaseAlert from "@/components/Base/BaseAlert.vue";
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseSpinner from "@/components/Base/BaseSpinner.vue";
import BaseInput from "@/components/Base/BaseInput.vue";
import BaseRoundedButton from "@/components/Base/BaseRoundedButton.vue"

// Layout components
import AppHeader from "@/components/Layout/AppHeader.vue";
import LoginHomePageVue from "./pages/Auth/LoginHomePage.vue";
import CategoryCard from "./components/Card/CategoryCard.vue"
import SideBar from "./components/Layout/SideBar.vue"


declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    // Base components
    BaseAlert: typeof BaseAlert;
    BaseRoundedButton: typeof BaseRoundedButton;
    BaseButton: typeof BaseButton;
    BaseSpinner: typeof BaseSpinner;
    BaseInput: typeof BaseInput;
    
    // Layout components
    CategoryCard: typeof CategoryCard;
    AppHeader: typeof AppHeader;
    LoginHomePageVue: typeof LoginHomePageVue;
    SideBar: typeof SideBar;
  }
}
