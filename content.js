"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var images = document.getElementsByTagName('img');
ReportToTlistButton()
// var intervalId = window.setInterval(function () {
//     ReportToTlistButton();
// }, 10000);

// for (var i = 0, l = images.length; i < l; i++) {
//     console.log("I have seen this ")
//     images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
// }




function instagramFollower() {
    var instagramFriendListItem = ".PZuss > li"

    var instagramFriendImage = "img._6q-tv";
    var instagramUserName = "a.FPmhX.notranslate._0imsa";
    var instagramFullName = ".wFPL8";
    var instagramFriendLink = "a.FPmhX.notranslate._0imsa";

    var InstagramUserNameWithUrl = document.querySelectorAll(instagramFriendListItem);
    var UserDataArray = [];
    console.log("instagramFullName" + InstagramUserNameWithUrl.length);
    //extract data and convert it to json format
    Object.keys(InstagramUserNameWithUrl).map(function (x) {
        var profileName = InstagramUserNameWithUrl[x].querySelectorAll(instagramUserName)[0];
        var profileImage = InstagramUserNameWithUrl[x].querySelectorAll(instagramFriendImage)[0];
        var profileLink = InstagramUserNameWithUrl[x].querySelectorAll(instagramFriendLink)[0];
        var profileFullName = InstagramUserNameWithUrl[x].querySelectorAll(instagramFullName)[0];
        if (profileName !== undefined) {
            UserDataArray = [].concat(_toConsumableArray(UserDataArray), [{
                image: profileImage !== undefined ? profileImage.src : "",
                name: profileName !== undefined ? profileName.innerHTML : "",
                url: profileLink !== undefined ? profileLink.href : "",
                others: profileFullName !== undefined ? profileFullName.innerHTML : "",
                platform: "Instagram"
            }]);
        }
    });
    console.log("UserDataArray", UserDataArray);
}



function ReportToTlistButton() {
    var ProfilePageButtonList = ".nZSzR >.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm"



    var TlistReportButton = document.createElement('button');
    TlistReportButton.innerHTML = "😆 Report to Tlist 😍";
    TlistReportButton.classList.add('tlist-button');
    TlistReportButton.classList.add('instagram-profile-button');



    var ProfilePageButtonList = document.querySelector(ProfilePageButtonList);
    ProfilePageButtonList.parentNode.insertBefore(TlistReportButton, ProfilePageButtonList)
    var UserDataArray = [];
    console.log(ProfilePageButtonList);


}