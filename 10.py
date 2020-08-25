class Solution(object):
    def isMatch(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: bool
        """
        memo = {}
        # Compare s[i:] and p[j:]
        def dp(i, j):
            if (i, j) not in memo:
                if j == len(p):
                    # When pattern has run out but string has not,
                    # the answer should be False.
                    # If both the pattern and the string has run out,
                    # the answer is True.
                    if i == len(s):
                        # s[i:] = ''
                        ans = True
                    else:
                        # s[i:] != ''
                        ans = False
                else:
                    # When pattern has not run out
                    if i < len(s):
                        # First check if pattern starts with .
                        # or the first character of pattern equals 
                        # the first character of the string.
                        if p[j] == '.' or p[j] == s[i]:
                            if j + 1 < len(p) and p[j + 1] == '*':
                                # In this case, we can move one position on the 
                                # string or we can move two position on the pattern.
                                ans = dp(i, j + 2) or dp(i + 1, j)
                            else:
                                # In this case, we can only move both pointer one 
                                # position.
                                ans = dp(i + 1, j + 1)
                        else:
                            # If pattern does not starts with .
                            # and the first character of pattern does not
                            # equals the first character of the string,
                            # the only possible way to be true is 
                            # the pattern starts with character*,
                            # so we can ignore the character*.
                            if j + 1 < len(p) and p[j + 1] == '*':
                                ans = dp(i, j + 2)
                            else:
                                ans = False
                    # When string run out, 
                    # there is still posibility to be True,
                    # which is that last pattern is composed of character*.
                    # So we look at p[j + 1]
                    else:
                        if j + 1 < len(p) and p[j + 1] == '*':
                            ans = dp(i, j + 2)
                        else:
                            ans = False
                memo[(i, j)] = ans
            return memo[(i, j)]
        return dp(0, 0)
                    
                
        