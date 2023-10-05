import type { App } from "vue";

// UI components
import AppHeader from "@/components/Layout/AppHeader.vue";
import SideBar from "./Layout/SideBar.vue";

// Base components
import BaseAlert from "@/components/Base/BaseAlert.vue";
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseRoundedButton from "@/components/Base/BaseRoundedButton.vue";
import BaseSpinner from "@/components/Base/BaseSpinner.vue";
import BaseInput from "@/components/Base/BaseInput.vue";
import CategoryCard from "./Card/CategoryCard.vue";
import AzolikCategoryCard from "./Card/Azolik/AzolikCategoryCard.vue";

export default {
  install(app: App): void {
    // Configure some parameters before installing components

    // Register global components here
    app.component("BaseAlert", BaseAlert);
    app.component("BaseButton", BaseButton);
    app.component("BaseRoundedButton", BaseRoundedButton);
    app.component("BaseSpinner", BaseSpinner);
    app.component("BaseInput", BaseInput);
    app.component("CategoryCard", CategoryCard);
    app.component("AzolikCategoryCard", AzolikCategoryCard);

    app.component("AppHeader", AppHeader);
    app.component("SideBar", SideBar);
  },
};
