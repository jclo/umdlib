/** ****************************************************************************
 * UMDLib
 *
 * UMDLib is ...
 *
 * @exports  UMDLib
 * @author   John Doe
 * @version 0.4.1
 * @license
 * Copyright (c) 2017 <john@doe.com> (http://www.doe.com/).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * ****************************************************************************/
!function(t,n){"use strict";"function"==typeof define&&define.amd?define([""],n):"object"==typeof exports?module.exports=n(t):t.UMDLib=n(t)}(this,function(t){"use strict";var n,e;return e=t.UMDLib,n=function(){},n.noConflict=function(){return t.UMDLib=e,this},n={getArray:function(){return["1","2","3"]},getString:function(){return"I am a string!"}},n.VERSION="0.4.1",n});