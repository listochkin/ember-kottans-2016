import equalIgnoreCase from 'kottans/utils/equal-ignore-case';
import { module, test } from 'qunit';

module('Unit | Utility | equal ignore case');

test('should return true for the following cases', function(assert) {
  const testCases = [
    ['john', 'John'],
    ['mikhail bortnik', 'Mikhail Bortnik'],
    ['reg^ex', 'reG^ex']
  ];

  const results = testCases.map(tc => equalIgnoreCase(...tc));
  const finalResult = results.every(r => r);
  assert.ok(finalResult);
});
