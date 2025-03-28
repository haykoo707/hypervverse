const crypto = require('crypto');

function verifyTelegramData(initData) {
    const botToken = '7520831618:AAHb-WERpGw3B4QYPgX3t2cDIPgyXw98k9g';
    const data = new URLSearchParams(initData);
    const hash = data.get('hash');
    data.delete('hash');

    const secret = crypto.createHash('sha256').update(botToken).digest();
    const checkString = Array.from(data.entries())
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => `${k}=${v}`)
        .join('\n');

    const computedHash = crypto
        .createHmac('sha256', secret)
        .update(checkString)
        .digest('hex');

    return computedHash === hash;
}