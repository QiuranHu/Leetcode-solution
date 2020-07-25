function countAndSay(n: number): string {
    if(n === 1) {
        return '1';
    } else {
        const lastResult = countAndSay(n - 1);
        let stringBuilder = [];
        let count = 0;
        let digit = '';
        for(let i = 0; i < lastResult.length; i++) {
            if(i === 0) {
                count += 1;
                digit = lastResult[i];
            } else {
                if(lastResult[i] !== digit) {
                    stringBuilder.push(String(count));
                    stringBuilder.push(digit);
                    digit = lastResult[i];
                    count = 1;
                } else {
                    count += 1;
                }
            }
        }
        stringBuilder.push(String(count));
        stringBuilder.push(digit);
        return stringBuilder.join('');
    }
};