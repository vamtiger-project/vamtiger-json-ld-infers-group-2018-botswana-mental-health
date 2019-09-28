import * as VBM from 'vamtiger-browser-method/build/types';
import { expect } from 'chai';

const { VamtigerBrowserMethod } = window;
const { loadScript } = VamtigerBrowserMethod;

export default () => describe('vamtiger-json-ld-image-infers-group-botswana-mental-health', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-json-ld-image-infers-group-botswana-mental-health.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="vamtiger-json-ld-image-infers-group-botswana-mental-health.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});