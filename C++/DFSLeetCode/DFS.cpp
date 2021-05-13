#include <iostream>
#include <vector>


using namespace std;

int main(){
    int n = 10;
    vector<bool> visted(n, false);
    for(int i =0 ; i!= 10 ; i++){
        cout<<visted[i]<<endl;
    }

    visted[5] = true;
    cout<<visted[5]<<endl;
}