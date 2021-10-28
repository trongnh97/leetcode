/*================================
    Bài test mức độ trung bình
=================================*/
//  Merge Two Sorted Lists
var mergeTwoLists = function(l1, l2) {
    if(l1 == null) return l2;
    if(l2 == null) return l1;
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

// Restore IP Addresses
var restoreIpAddresses = function(s) {
    let res = [];
    let arr = [];
    let dfs = function(arr, s) {
        let number = arr[arr.length-1];
        if (number > 255) return false; 
        if (arr.length<4 && s=='') return false;
        if (number && number.length > 1 && number[0]=='0') return false; // checks leading 0 
        if (arr.length == 3) {
            if (s > 255 || (s.length > 1 && s[0]=='0')) return false;
            else{
                res.push([...arr, s].join('.'));
                return true;
            }
        }
        for (let i=1;i<4;i++) {
            dfs([...arr, s.slice(0, i)], s.slice(i))
        }
    }
    dfs(arr, s);
    return res;
};

// Reverse words in a string
var reverseWords = function(s) {
    let splitStr = s.split(' ');
    let reversedStr = '';
    
    for (let i = splitStr.length - 1; i >= 0; i--) {
        if (splitStr[i] != '') {
            if(reversedStr.length > 0){
                reversedStr += ' ';
            }
			
			reversedStr += splitStr[i];
        }
    }
    
    return reversedStr;
};
