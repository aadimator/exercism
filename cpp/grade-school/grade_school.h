#include <string>
#include <map>
#include <vector>

#if !defined(GRADE_SCHOOL_H)
#define GRADE_SCHOOL_H

using namespace std;

namespace grade_school {

    class school {
        map<int, vector<string>> data;

    public:
        map<int, vector<string>> roster() const;
        void add(const string&, int);
        vector<string> grade(int) const;
    };

}  // namespace grade_school

#endif // GRADE_SCHOOL_H