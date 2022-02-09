#include <bits/stdc++.h>
using namespace std;


int fromMid(string str, int left, int right){
    if (str.length()==0 || left>right) return 0;

    while(left>=0 && right <str.length() && str[left] == str[right] ){
        left--;
        right++;

    }
    return right-left-1;
}

String longest (string str){
    if(str==null || str.length()<1) return "";
    int start = 0; 
    int end = 0; 
    for(int i = 0; i<str.length(); i++){
        int len1 = fromMid(str, i, i);
        int len2 = fromMid(str, i, i+1);
        int len = max(len1, len2);
        if(len>end-start){
            start = i-((len-1)/2); 
            end = i+(len/2);
        }
    }
    string str2 = "";
    int i = 0;
    while(true){
        str2[i++] = str[start++];
        if(start == end+1) break;
    }
    return str2;
}

int main (){
    string str = "racecar";
    cout<<str<<endl;

}

