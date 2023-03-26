CXX       := clang++
CXX_FLAGS := -Wall -Wextra -std=c++17 -g

BIN       := bin
SRC       := src
INCLUDE   := include
LIB       := lib

LIBRARIES :=
EXECUTABLE := hvc

ifeq ($(PLATFORM),win)
	EXECUTABLE := $(EXECUTABLE).exe
endif

ifeq ($(PLATFORM),linux)
	CXX_FLAGS += -DLINUX
endif

ifeq ($(PLATFORM),mac)
	CXX_FLAGS += -DMACOS
endif

$(shell mkdir bin)

all: clear $(BIN)/$(EXECUTABLE)

$(BIN)/$(EXECUTABLE): $(SRC)/*.cpp 
	$(CXX) $(CXX_FLAGS) -I$(INCLUDE) -L$(LIB) $^ -o $@ $(LIBRARIES)

run: all
	./$(BIN)/$(EXECUTABLE)

clear:
	-rm $(BIN)/*

.PHONY: win linux mac all

win: all
	make PLATFORM=win

linux: all
	make PLATFORM=linux

mac: all
	make PLATFORM=mac