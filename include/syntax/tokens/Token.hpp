#pragma once

#include <string>

class Token {
    private:
        std::string type;
        int value;

    public:
        Token(const std::string& type, int value);

        std::string getType() const;

        int getValue() const;
};
