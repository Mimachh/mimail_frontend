import { proxy } from "valtio";

const state = proxy({
    toggleMobileMenu: false
});

export default state;