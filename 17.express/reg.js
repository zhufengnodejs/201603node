var content = '<%=title%> <%=hello%>';
content.replace(/<%=(\w+)%>/g, function (matched, group1) {
    console.log(matched, group1);
});
