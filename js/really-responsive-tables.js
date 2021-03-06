(function() {
    this.ReallyResponsiveTables = function() {

    }

    ReallyResponsiveTables.prototype = {
        init: function() {
            var changing = false;

            $("table.really-responsive-table").each(function() {
                rrt(this);

            }).promise().done(function() {
                $("table.really-responsive-table").bind("DOMSubtreeModified", function() {
                    if (!changing) {
                        changing = true;
                        rrt(this);
                        changing = false;
                    }
                });
            });
        }
    }

    function rrt(table) {
        $(table).find(".really-responsive-table-header").remove();
        var cols = $(table).find("tr").first().find("td, th");
        var rows = $(table).find("tr").slice("1");
        for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            var colsLength = cols.length;
            var pos = 0;
            for (var i=0; i < colsLength; i++) {
                var $newElement = $(cols[pos]).clone(true, true);
                $newElement.addClass("really-responsive-table-header clearfix");
                $(rows[rowIndex].cells[i]).before($newElement);
                pos++;
                i++;
                colsLength++;
            }
        }
    }

})();
