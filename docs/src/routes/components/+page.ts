import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { getComponentGroups } from "$lib/source";
import { resolve } from "$app/paths";

export const load: PageLoad = () => {
    var firstComponent = getComponentGroups()[0].items[0];

    redirect(302, resolve(`/components/${firstComponent.key}`));
};
