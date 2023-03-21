CXX		  := clang++
CXX_FLAGS := -Wall -Wextra -std=c++17 -g

BIN		:= bin
SRC		:= src
INCLUDE	:= include
LIB		:= lib

LIBRARIES	:=
EXECUTABLE	:= hvc


all: $(BIN)/$(EXECUTABLE)

run: clean all
	./$(BIN)/$(EXECUTABLE)

$(BIN)/$(EXECUTABLE): $(SRC)/*.cpp
	$(CXX) $(CXX_FLAGS) -I$(INCLUDE) -L$(LIB) $^ -o $@ $(LIBRARIES)

# Compila para macOS
mac:
	$(CXX) $(CXX_FLAGS) -target x86_64-apple-darwin -I$(INCLUDE) -L$(LIB) $(SRC)/*.cpp -o $(BIN)/$(EXECUTABLE) $(LIBRARIES)

# Compila para Windows
win:
	$(CXX) $(CXX_FLAGS) -target x86_64-pc-windows-msvc -I$(INCLUDE) -L$(LIB) $(SRC)/*.cpp -o $(BIN)/$(EXECUTABLE).exe $(LIBRARIES)

# Compila para Linux
linux:
	$(CXX) $(CXX_FLAGS) -target x86_64-linux-gnu -I$(INCLUDE) -L$(LIB) $(SRC)/*.cpp -o $(BIN)/$(EXECUTABLE) $(LIBRARIES)

clean:
	-rm $(BIN)/*