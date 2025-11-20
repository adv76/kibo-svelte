import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { getComponents } from "$lib/source";
import { resolve } from "$app/paths";

export const load: PageLoad = () => {
    var firstComponent = getComponents()[0];

    redirect(302, resolve(`/components/${firstComponent.key}`));
};
