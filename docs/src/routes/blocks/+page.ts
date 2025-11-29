import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { getBlocks } from "$lib/source";
import { resolve } from "$app/paths";

export const load: PageLoad = () => {
    var firstBlock = getBlocks()[0];

    redirect(302, resolve(`/blocks/${firstBlock.key}`));
};
