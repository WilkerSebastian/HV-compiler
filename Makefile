CXX       := clang++
CXX_FLAGS := -Wall -Wextra -std=c++17 -g
BIN       := bin
SRC       := src
INCLUDE   := include
LIB       := lib
LIBRARIES :=
EXECUTABLE := hvc

# Detectar o sistema operacional
ifeq ($(shell uname -s),Linux)
    CXX_FLAGS += -target x86_64-pc-linux-gnu
    TARGET = linux
	EXECUTABLE = hvc.exe
endif
ifeq ($(shell uname -s),Darwin)
    CXX_FLAGS += -target x86_64-apple-darwin
    TARGET = mac
endif
ifeq ($(OS),Windows_NT)
    CXX_FLAGS += -target x86_64-pc-win32
    TARGET = win
endif

all: clean $(BIN)/$(EXECUTABLE)

$(BIN)/$(EXECUTABLE): $(SRC)/*.cpp
	$(CXX) $(CXX_FLAGS) -I$(INCLUDE) -L$(LIB) $^ -o $@ $(LIBRARIES)

clean:
	-rm $(BIN)/*
