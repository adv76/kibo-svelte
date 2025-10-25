export class BannerContext {
    show: boolean;

    constructor(show: boolean = true) {
        this.show = show;
    }  

    setShow(show: boolean) {
        this.show = show;
    }
};
