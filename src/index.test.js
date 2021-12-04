/**
 * @jest-environment jsdom
 */
import { DLViewItem } from "./dataLayerObjectFormats/dlViewItem.js";

import { dl_view_item_prototype } from "./dataLayerObjectFormats/dlViewItem"

describe('dl_view_item shape verifier', () => {
    test('A properly formatted object should not throw any errors', () => {
      const dlViewItem = new DLViewItem(dl_view_item_prototype);
      dlViewItem.verify();
      expect(dlViewItem.errors.length).toBe(0);
    });
});