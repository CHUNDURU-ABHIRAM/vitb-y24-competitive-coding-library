class BitManipulation:

    def getBit(self, n, k):
        return (n >> k) & 1

    def setBit(self, n, k):
        n = (1 << k) | n
        return n

    def clearBit(self, n, k):
        n = n & ~(1 << k)
        return n

    def toggleBit(self, n, k):
        n = n ^ (1 << k)
        return n

    def isPowerOfTwo(self, n):
        if n > 0 and (n & (n - 1)) == 0:
            return True
        return False

    def countSetBits(self, n):
        count = 0

        while n > 0:
            n = n & (n - 1)
            count += 1

        return count