import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { getComponents } from "$lib/source";

export const load: PageLoad = () => {
    var firstComponent = getComponents()[0];

    redirect(302, "/components/" + firstComponent.name);
};
