#include <algorithm>
#include "grade_school.h"

namespace grade_school {

    const std::map<int, std::vector<std::string>>& school::roster() const {
        return roster_;
    }

    void school::add(const std::string& name, int grade) {
        auto upper = std::upper_bound(roster_[grade].begin(), roster_[grade].end(), name);
        roster_[grade].insert(upper, name);
    }

    std::vector<std::string> school::grade(int g) const {
        return roster().find(g) == roster().end() ? std::vector<std::string>() : roster().at(g);
    }
}  // namespace grade_school
