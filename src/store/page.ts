import { atom } from "recoil";

export const pageTitle = atom<string>({
    key: 'page_title',
    default: ''
});