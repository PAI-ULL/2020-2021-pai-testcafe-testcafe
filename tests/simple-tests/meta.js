import { Selector } from 'testcafe';

fixture `My fixture`
    .page `http://example.com`;

test
    .page `http://devexpress.github.io/testcafe/blog/`
    .meta('device', 'mobile')
    ('Mobile test', async t => {});

test
    .page `http://devexpress.github.io/testcafe/blog/`
    .meta('device', 'pc')
    ('PC test', async t => {});