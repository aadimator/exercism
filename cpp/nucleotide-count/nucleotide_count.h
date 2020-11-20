#include <string>
#include <map>

#if !defined(NUCLEOTIDE_COUNT_H)
#define NUCLEOTIDE_COUNT_H

namespace nucleotide_count {

    class counter {
        std::map<char, int> counts { {'A', 0}, {'T', 0}, {'C', 0}, {'G', 0} };

    public:
        explicit counter(const std::string&);

        std::map<char, int> nucleotide_counts() const;

        int count(char) const;
    };



}  // namespace nucleotide_count

#endif // NUCLEOTIDE_COUNT_H