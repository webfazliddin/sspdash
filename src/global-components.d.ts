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


declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    // Base components
    BaseAlert: typeof BaseAlert;
    BaseRoundedButton: typeof BaseRoundedButton;
    BaseButton: typeof BaseButton;
    BaseSpinner: typeof BaseSpinner;
    BaseInput: typeof BaseInput;
    CategoryCard: typeof CategoryCard;

    // Layout components
    AppHeader: typeof AppHeader;
    LoginHomePageVue: typeof LoginHomePageVue;
  }
}
