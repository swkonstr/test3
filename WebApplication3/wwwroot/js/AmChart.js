$(Document).ready(function () {

});

var ChartManager = {
    GetChartData: function () {
        var objData = "";
        var jsonParam = "";
        var serviceUrl = "";
        AjaxManager.GetJsonResult(serviceUrl, jsonParam, false, false, onSuccess, onFailed);

        function onSuccess(jsonData) {
            objData = jsonData;
        }

        function onFailed(error) {
            window.alert(error.statusText);
        }
        return objData;
    }
};

var ChartHelper = {
    InitChart: function () {
        ChartHelper.LoadChart();
    },
    LoadChart: function () {

    }
};

