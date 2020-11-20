#include <algorithm>
#include "grade_school.h"

namespace grade_school {

    map<int, vector<string>> school::roster() const {
        return data;
    }

    void school::add(const string& name, int grade) {
        data[grade].push_back(name);
        sort(data[grade].begin(), data[grade].end());
    }

    vector<string> school::grade(int g) const {
        return roster()[g];
    }
}  // namespace grade_school
