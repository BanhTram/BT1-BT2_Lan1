var app = angular.module("myApp", []);
app.controller("myController", function ($scope) {
    $scope.hocSinh = [
        { hoTen: "Nam", tuoi: 16, lop: "Lop 10A1" },
        { hoTen: "Bede", tuoi: 17, lop: "Lop 10A2" },
        { hoTen: "Hoho", tuoi: 17, lop: "Lop 10A2" },
        { hoTen: "Kaka", tuoi: 18, lop: "Lop 11A1" },
        { hoTen: "Benben", tuoi: 16, lop: "Lop 11A2" },
        { hoTen: "Lunu", tuoi: 18, lop: "Lop 12A1" },
        { hoTen: "Lpaa", tuoi: 18, lop: "Lop 12A2" },
    ];
    // $scope.lop = [
    //     { tenLop: "Lop 10A1", value: "Lop 10A1"},
    //     { tenLop: "Lop 10A2", value: "Lop 10A2"},
    //     { tenLop: "Lop 10A2", value: "Lop 10A2"},
    //     { tenLop: "Lop 11A1", value: "Lop 11A1"},
    //     { tenLop: "Lop 11A2", value: "Lop 11A2"},
    //     { tenLop: "Lop 12A1", value: "Lop 12A1"},
    //     { tenLop: "Lop 12A2", value: "Lop 12A2"}
    // ];
    $scope.lop = [
        "Lop ",
        "Lop 10", "Lop 10A1", "Lop 10A2",
        "Lop 11", "Lop 11A1", "Lop 11A2",
        "Lop 12", "Lop 12A1", "Lop 12A2",
    ];
    // $scope.lop = [
    //     {name: "Tat ca cac lop ", value: "Lop"},
    //     {name: "Lop 10", value: "Lop"}, {name: "Lop 10A1",value: "Lop"}, {name: "Lop 10A2",value: "Lop"},
    //     {name: "Lop 11", value: "Lop"}, {name: "Lop 11A1", value: "Lop"}, {name: "Lop 11A2",value: "Lop"},
    //     {name: "Lop 12", value: "Lop"}, {name: "Lop 12A1", value: "Lop"}, {name: "Lop 12A2",value: "Lop"}
    // ];
    $scope.choose = function () {
        $scope.xxxxx.singleSelect = $scope.xxxxx.lop.name;
    };

    $scope.change_Main_Add = true;
    $scope.change_Main_Edit = true;
    $scope.main = true;
    $scope.extra = true;
    $scope.edit = function (hs) {
        $scope.change_Main_Edit = false;
        $scope.main = false;
        $scope.hs = hs;
    };
    $scope.saveEdit = function () {
        $scope.change_Main_Edit = true;
        $scope.main = true;
    };
    //Them moi hoc sinh
    $scope.add = function () {
        $scope.change_Main_Add = false;
        $scope.main = false;
    };
    $scope.saveAdd = function (hoTen, tuoi, lop) {
        tuoi = new Date().getFullYear() - tuoi.getFullYear();
        var x = { hoTen: hoTen, tuoi: tuoi, lop: lop };
        alert(lop);
        $scope.hocSinh.push(x);
        $scope.change_Main_Add = true;
        $scope.main = true;
    };
    $scope.delete = function (hs) {
        var index = $scope.hocSinh.indexOf(hs);
        $scope.hocSinh.splice(index, 1);
    };
    //Tim kiem
    $scope.data = {};
    $scope.inputData = {};
    $scope.applySearch = function () {
        for (prop in $scope.inputData) {
            $scope.data[prop] = $scope.inputData[prop];
        }
    };

    $scope.change_Tab_Hoc_Sinh = function () {
        $scope.main = true;
        $scope.extra = true;
        $scope.change_Main_Add = true;
        $scope.change_Main_Edit = true;
    };
    $scope.change_Tab_Lop = function () {
        $scope.extra = false;
        $scope.main = false;
        $scope.change_Main_Add = true;
        $scope.change_Main_Edit = true;
    };
});