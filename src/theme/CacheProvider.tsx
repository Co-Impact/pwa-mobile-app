import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import rtlPlugin from '@mui/stylis-plugin-rtl';

// Create rtl cache
const rtlCache = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

export const CacheProviderRTL = (props: any)=> {
    return <CacheProvider value={rtlCache}>{props.children}</CacheProvider>;
}
