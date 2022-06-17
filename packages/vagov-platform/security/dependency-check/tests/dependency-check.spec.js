/* eslint-disable no-console */
const dependencyCheck = require('../dependency-check.js');

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

global.console.log = jest.fn();

describe('Confirm security check functionality', () => {
  beforeEach(() => {
    consoleSpy.mockClear();
  });
  test('Script passes with no critical issues', async () => {
    const output = {
      type: 'auditSummary',
      data: {
        vulnerabilities: {
          info: 0,
          low: 0,
          moderate: 0,
          high: 0,
          critical: 0,
        },
      },
    };
    const json = JSON.stringify(output);
    dependencyCheck.processAuditResults(json);
    expect(console.log).toHaveBeenLastCalledWith(
      'No security advisories rated moderate or higher found for non-dev dependencies.',
    );
  });
});
