#include "nucleotide_count.h"
#include <stdexcept>

using namespace std;

namespace nucleotide_count {

    counter::counter(const string& s) {
        for (char i : s) {
            auto iter = counts.find(i);
            if (iter == counts.end()) throw invalid_argument("DNA string is not valid");
            iter->second++;
        }
    }

    std::map<char, int> counter::nucleotide_counts() const {
        return counts;
    }

    int counter::count(char c) const {
        auto iter = counts.find(c);
        if (iter == counts.end()) throw invalid_argument("Invalid argument.");
        return iter->second;
    }

}  // namespace nucleotide_count
