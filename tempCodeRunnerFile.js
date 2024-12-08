var ans = (function () {
  var priv = 13;
  return {
    getter: function () {
      console.log(priv);
    },
    setter: function () {
      priv = 14;
    },
  };
})();
ans.getter();
ans.setter(14);
