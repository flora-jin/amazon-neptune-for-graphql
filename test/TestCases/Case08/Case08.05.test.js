import {readJSONFile} from '../../testLib';
import {main} from "../../../src/main";

const casetest = readJSONFile('./test/TestCases/Case08/case03.json');

async function executeUtility() {
    process.argv = casetest.argv;
    await main();
}

describe('Create Apollo Server output artifacts from input schema file', () => {
    test('Execute utility: ' + casetest.argv.join(' '), async () => {
        expect(await executeUtility()).not.toBe(null);
    }, 600000);
});