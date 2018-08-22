import { formatPhoneExtension } from './formatDetails';

describe('formatPhoneExtension', () => {
  describe('When extension is available ', () => {
    it('returns Extension with Ext text ', () => {
      const details = {
        phone_extension_number: '011',
      };
      expect(formatPhoneExtension(details)).toEqual(' Ext 011');
    });
  });

  describe('When extension is not available ', () => {
    it('returns just empty ', () => {
      const details = {
        phone_number: '1234567890',
      };
      expect(formatPhoneExtension(details)).toEqual('');
    });
  });
});