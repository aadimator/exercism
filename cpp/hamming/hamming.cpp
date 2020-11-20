#include <stdexcept>
#include "hamming.h"

using namespace std;

namespace hamming {

    int compute(const string &a, const string &b) {
        if (a.length() != b.length())
            throw domain_error("Strings should be of equal length.");

        int distance = 0;
        for (size_t i = 0; i < a.length(); i++) {
            if (a[i] != b[i]) ++distance;
        }
        return distance;
    }

}  // namespace hamming
