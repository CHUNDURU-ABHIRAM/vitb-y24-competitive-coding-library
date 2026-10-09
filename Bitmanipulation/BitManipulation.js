class BitManipulation {
    getBit(n, k) {
        return (n >> BigInt(k)) & 1n;
    }

    setBit(n, k) {
        n = (1n << BigInt(k)) | n;
        return n;
    }

    clearBit(n, k) {
        n = n & ~(1n << BigInt(k));
        return n;
    }

    toggleBit(n, k) {
        n = n ^ (1n << BigInt(k));
        return n;
    }

    isPowerOfTwo(n) {
        if (n > 0n && (n & (n - 1n)) === 0n) {
            return true;
        }
        return false;
    }
    countSetBits(n) {
        let count = 0;
        while (n > 0n) {
            n = n & (n - 1n);
            count++;
        }
        return count;
    }
}