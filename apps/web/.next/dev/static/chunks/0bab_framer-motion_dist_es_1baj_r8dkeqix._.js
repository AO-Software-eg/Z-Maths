(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopChild",
    ()=>PopChild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/utils/is-html-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$composed$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */ class PopChildMeasure extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.getElement();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
            const parent = element.offsetParent;
            const parentWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(parent) ? parent.offsetWidth || 0 : 0;
            const parentHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(parent) ? parent.offsetHeight || 0 : 0;
            const computedStyle = getComputedStyle(element);
            const size = this.props.sizeRef.current;
            size.height = parseFloat(computedStyle.height);
            size.width = parseFloat(computedStyle.width);
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
            size.right = parentWidth - size.width - size.left;
            size.bottom = parentHeight - size.height - size.top;
            size.direction = computedStyle.direction;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */ componentDidUpdate() {}
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent, anchorX, anchorY, root, pop, popNode }) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        direction: "ltr"
    });
    const { nonce } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    /**
     * In React 19, refs are passed via props.ref instead of element.ref.
     * We check props.ref first (React 19) and fall back to element.ref (React 18).
     *
     * The composed ref is only used when popping the child out (pop !== false),
     * so we avoid reading children.props.ref otherwise. In React 18.3 that read
     * triggers a spurious "`ref` is not a prop" warning getter (#3745).
     */ const childRef = pop !== false ? children.props?.ref ?? children?.ref : undefined;
    const composedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$composed$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(ref, childRef);
    /**
     * The child's element: the one our ref reached or, if the child can't
     * be given a ref (for instance a function component that doesn't
     * forward it), its outermost motion component's element (#2503).
     */ const getElement = ()=>ref.current || popNode?.current?.current;
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])({
        "PopChild.useInsertionEffect": ()=>{
            const { width, height, top, left, right, bottom, direction } = size.current;
            const element = getElement();
            if (isPresent || pop === false || !element || !width || !height) return;
            const isRTL = direction === "rtl";
            const x = anchorX === "left" ? isRTL ? `right: ${right}` : `left: ${left}` : isRTL ? `left: ${left}` : `right: ${right}`;
            const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
            element.dataset.motionPopId = id;
            /**
         * Use the element's own document so this works when rendering
         * into another window or iframe (e.g. via window.open()).
         */ const doc = element.ownerDocument;
            const style = doc.createElement("style");
            if (nonce) style.nonce = nonce;
            const parent = root ?? doc.head;
            parent.appendChild(style);
            if (style.sheet) {
                style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
            }
            return ({
                "PopChild.useInsertionEffect": ()=>{
                    element.removeAttribute("data-motion-pop-id");
                    if (parent.contains(style)) {
                        parent.removeChild(style);
                    }
                }
            })["PopChild.useInsertionEffect"];
        }
    }["PopChild.useInsertionEffect"], [
        isPresent
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopChildMeasure, {
        isPresent: isPresent,
        getElement: getElement,
        sizeRef: size,
        pop: pop,
        children: pop === false ? children : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, {
            ref: composedRef
        })
    });
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresenceChild",
    ()=>PresenceChild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/PresenceContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PopChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root })=>{
    const presenceChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])(newChildrenMap);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    /**
     * The outermost motion component within this child. popLayout falls
     * back to its element when the child can't be given a ref, for instance
     * a function component that doesn't forward refs (#2503).
     */ const popNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    // Written in a layout effect (not render) so discarded concurrent
    // renders can't leave the refs pointing at uncommitted state.
    const isPresentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isPresent);
    const onExitCompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onExitComplete);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "PresenceChild.useIsomorphicLayoutEffect": ()=>{
            isPresentRef.current = isPresent;
            onExitCompleteRef.current = onExitComplete;
        }
    }["PresenceChild.useIsomorphicLayoutEffect"]);
    let isReusedContext = true;
    let context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PresenceChild.useMemo[context]": ()=>{
            isReusedContext = false;
            return {
                id,
                initial,
                isPresent,
                custom,
                onExitComplete: ({
                    "PresenceChild.useMemo[context]": (childId)=>{
                        presenceChildren.set(childId, true);
                        for (const isComplete of presenceChildren.values()){
                            if (!isComplete) return; // can stop searching when any is incomplete
                        }
                        onExitComplete && onExitComplete();
                    }
                })["PresenceChild.useMemo[context]"],
                register: ({
                    "PresenceChild.useMemo[context]": (childId, node)=>{
                        presenceChildren.set(childId, false);
                        if (node && node.parent?.presenceContext?.id !== id) {
                            popNode.current = node;
                        }
                        return ({
                            "PresenceChild.useMemo[context]": ()=>{
                                presenceChildren.delete(childId);
                                !isPresentRef.current && !presenceChildren.size && onExitCompleteRef.current?.();
                            }
                        })["PresenceChild.useMemo[context]"];
                    }
                })["PresenceChild.useMemo[context]"]
            };
        }
    }["PresenceChild.useMemo[context]"], [
        isPresent,
        presenceChildren,
        onExitComplete
    ]);
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */ if (presenceAffectsLayout && isReusedContext) {
        context = {
            ...context
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PresenceChild.useMemo": ()=>{
            presenceChildren.forEach({
                "PresenceChild.useMemo": (_, key)=>presenceChildren.set(key, false)
            }["PresenceChild.useMemo"]);
        }
    }["PresenceChild.useMemo"], [
        isPresent
    ]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PresenceChild.useEffect": ()=>{
            !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
        }
    }["PresenceChild.useEffect"], [
        isPresent
    ]);
    children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PopChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopChild"], {
        pop: mode === "popLayout",
        isPresent: isPresent,
        anchorX: anchorX,
        anchorY: anchorY,
        root: root,
        popNode: popNode,
        children: children
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceContext"].Provider, {
        value: context,
        children: children
    });
};
function newChildrenMap() {
    return new Map();
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatePresence",
    ()=>AnimatePresence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PresenceChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */ const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root })=>{
    const [isParentPresent, safeToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePresence"])(propagate);
    /**
     * Filter any children that aren't ReactElements. We can only track components
     * between renders with a props.key.
     */ const presentChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimatePresence.useMemo[presentChildren]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlyElements"])(children)
    }["AnimatePresence.useMemo[presentChildren]"], [
        children
    ]);
    /**
     * Track the keys of the currently rendered children. This is used to
     * determine which children are exiting.
     */ const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChildKey"]);
    /**
     * If `initial={false}` we only want to pass this to components in the first render.
     */ const isInitialRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    /**
     * Track which exiting children have finished animating out.
     */ const exitComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "AnimatePresence.useConstant[exitComplete]": ()=>new Map()
    }["AnimatePresence.useConstant[exitComplete]"]);
    /**
     * Track which components are currently processing exit to prevent duplicate processing.
     */ const exitingComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    /**
     * Save children to render as React state. To ensure this component is concurrent-safe,
     * we check for exiting children via an effect.
     */ const [diffedChildren, setDiffedChildren] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(presentChildren);
    const [renderedChildren, setRenderedChildren] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(presentChildren);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "AnimatePresence.useIsomorphicLayoutEffect": ()=>{
            if (propagate && !isParentPresent && !renderedChildren.length) {
                safeToRemove?.();
            }
        }
    }["AnimatePresence.useIsomorphicLayoutEffect"], [
        isParentPresent,
        propagate,
        renderedChildren.length,
        safeToRemove
    ]);
    /**
     * When every exit completes, we re-render to remove the exited children
     * and store onExitComplete here. It fires from the cleanup of an effect
     * keyed on the rendered children, so it runs in the commit that removes
     * them (or when we unmount), after their own effect cleanups.
     */ const pendingExitComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatePresence.useEffect": ()=>({
                "AnimatePresence.useEffect": ()=>{
                    const callback = pendingExitComplete.current;
                    pendingExitComplete.current = undefined;
                    callback?.();
                }
            })["AnimatePresence.useEffect"]
    }["AnimatePresence.useEffect"], [
        renderedChildren
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "AnimatePresence.useIsomorphicLayoutEffect": ()=>{
            isInitialRender.current = false;
            /**
         * Update complete status of exiting children.
         */ for(let i = 0; i < renderedChildren.length; i++){
                const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChildKey"])(renderedChildren[i]);
                if (!presentKeys.includes(key)) {
                    if (exitComplete.get(key) !== true) {
                        exitComplete.set(key, false);
                    }
                } else {
                    exitComplete.delete(key);
                    exitingComponents.current.delete(key);
                }
            }
        }
    }["AnimatePresence.useIsomorphicLayoutEffect"], [
        renderedChildren,
        presentKeys.length,
        presentKeys.join("-")
    ]);
    const exitingChildren = [];
    if (presentChildren !== diffedChildren) {
        let nextChildren = [
            ...presentChildren
        ];
        /**
         * Loop through all the currently rendered components and decide which
         * are exiting.
         *
         * Exiting children are reinserted directly after the child they
         * previously followed. Splicing at their index within the previously
         * rendered children, as we used to, indexes into the wrong list: it
         * can interleave them with entering children and push present children
         * to new positions, remounting them (#3746).
         */ let insertionIndex = 0;
        for (const child of renderedChildren){
            const presentIndex = presentKeys.indexOf((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChildKey"])(child));
            if (presentIndex === -1) {
                nextChildren.splice(insertionIndex++, 0, child);
                exitingChildren.push(child);
            } else {
                insertionIndex = presentIndex + exitingChildren.length + 1;
            }
        }
        /**
         * Once every exiting child has finished animating out, remove them
         * all at once. Otherwise, if we're in "wait" mode, we want to only
         * render the exiting children until they've all exited.
         */ if (exitingChildren.every((child)=>exitComplete.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChildKey"])(child)))) {
            nextChildren = presentChildren;
        } else if (mode === "wait") {
            nextChildren = exitingChildren;
        }
        setRenderedChildren((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlyElements"])(nextChildren));
        setDiffedChildren(presentChildren);
        /**
         * Early return to ensure once we've set state with the latest diffed
         * children, we can immediately re-render.
         */ return null;
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && mode === "wait" && renderedChildren.length > 1) {
        console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
    }
    /**
     * If we've been provided a forceRender function by the LayoutGroupContext,
     * we can use it to force a re-render amongst all surrounding components once
     * all components have finished animating out.
     */ const { forceRender } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroupContext"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: renderedChildren.map((child)=>{
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChildKey"])(child);
            const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
            const onExit = ()=>{
                if (exitingComponents.current.has(key)) {
                    return;
                }
                if (exitComplete.has(key)) {
                    exitingComponents.current.add(key);
                    exitComplete.set(key, true);
                } else {
                    return;
                }
                let isEveryExitComplete = true;
                exitComplete.forEach((isExitComplete)=>{
                    if (!isExitComplete) isEveryExitComplete = false;
                });
                if (isEveryExitComplete) {
                    forceRender?.();
                    /**
                     * Re-diff rather than setting the children to render
                     * directly: this update can be applied after a
                     * transition has committed new children, so any
                     * children read now could be stale by then.
                     */ setDiffedChildren([]);
                    propagate && safeToRemove?.();
                    pendingExitComplete.current = onExitComplete;
                }
            };
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PresenceChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceChild"], {
                isPresent: isPresent,
                initial: !isInitialRender.current || initial ? undefined : false,
                custom: custom,
                presenceAffectsLayout: presenceAffectsLayout,
                mode: mode,
                root: root,
                onExitComplete: isPresent ? undefined : onExit,
                anchorX: anchorX,
                anchorY: anchorY,
                children: child
            }, key);
        })
    });
};
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPresent",
    ()=>isPresent,
    "useIsPresent",
    ()=>useIsPresent,
    "usePresence",
    ()=>usePresence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/PresenceContext.mjs [app-client] (ecmascript)");
"use client";
;
;
/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed from the tree,
 * but `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */ function usePresence(subscribe = true) {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceContext"]);
    if (context === null) return [
        true,
        null
    ];
    const { isPresent, onExitComplete, register } = context;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePresence.useEffect": ()=>{
            if (subscribe) {
                return register(id);
            }
        }
    }["usePresence.useEffect"], [
        subscribe
    ]);
    const safeToRemove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePresence.useCallback[safeToRemove]": ()=>subscribe && onExitComplete && onExitComplete(id)
    }["usePresence.useCallback[safeToRemove]"], [
        id,
        onExitComplete,
        subscribe
    ]);
    return !isPresent && onExitComplete ? [
        false,
        safeToRemove
    ] : [
        true
    ];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */ function useIsPresent() {
    return isPresent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceContext"]));
}
function isPresent(context) {
    return context === null ? true : context.isPresent;
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChildKey",
    ()=>getChildKey,
    "onlyElements",
    ()=>onlyElements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const getChildKey = (child)=>child.key || "";
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by prepending `.$`
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].forEach(children, (child)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(child)) filtered.push(child);
    });
    return filtered;
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutGroupContext",
    ()=>LayoutGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const LayoutGroupContext = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/LazyContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LazyContext",
    ()=>LazyContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const LazyContext = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    strict: false
});
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionConfigContext",
    ()=>MotionConfigContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
/**
 * @public
 */ const MotionConfigContext = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    transformPagePoint: (p)=>p,
    isStatic: false,
    reducedMotion: "never"
});
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateMotionContext",
    ()=>useCreateMotionContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function useCreateMotionContext(props) {
    const { initial, animate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentTreeVariants"])(props, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionContext"]));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCreateMotionContext.useMemo": ()=>({
                initial,
                animate
            })
    }["useCreateMotionContext.useMemo"], [
        variantLabelsAsDependency(initial),
        variantLabelsAsDependency(animate)
    ]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionContext",
    ()=>MotionContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
const MotionContext = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentTreeVariants",
    ()=>getCurrentTreeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$controlling$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$variant$2d$label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs [app-client] (ecmascript)");
;
function getCurrentTreeVariants(props, context) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$controlling$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isControllingVariants"])(props)) {
        const { initial, animate } = props;
        return {
            initial: initial === false || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$variant$2d$label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVariantLabel"])(initial) ? initial : undefined,
            animate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$variant$2d$label$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVariantLabel"])(animate) ? animate : undefined
        };
    }
    return props.inherit !== false ? context : {};
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/PresenceContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresenceContext",
    ()=>PresenceContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
/**
 * @public
 */ const PresenceContext = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SwitchLayoutGroupContext",
    ()=>SwitchLayoutGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
/**
 * Internal, exported only for usage in Framer
 */ const SwitchLayoutGroupContext = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/gestures/drag/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragGesture",
    ()=>DragGesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/Feature.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$VisualElementDragControls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/gestures/drag/VisualElementDragControls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-utils@14.6.0/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
;
;
class DragGesture extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feature"] {
    constructor(node){
        super(node);
        this.removeGroupControls = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
        this.removeListeners = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
        this.controls = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$drag$2f$VisualElementDragControls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisualElementDragControls"](node);
    }
    mount() {
        // If we've been provided a DragControls for manual control over the drag gesture,
        // subscribe this component to it on mount.
        const { dragControls } = this.node.getProps();
        if (dragControls) {
            this.removeGroupControls = dragControls.subscribe(this.controls);
        }
        this.removeListeners = this.controls.addListeners() || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    }
    update() {
        const { dragControls, drag } = this.node.getProps();
        const { dragControls: prevDragControls, drag: prevDrag } = this.node.prevProps || {};
        if (dragControls !== prevDragControls) {
            this.removeGroupControls();
            if (dragControls) {
                this.removeGroupControls = dragControls.subscribe(this.controls);
            }
        }
        /**
         * If drag is disabled mid-gesture, for instance from onDrag, end the
         * gesture as if released. This must happen before this render's
         * layout change is processed, otherwise the element is still
         * animation-blocked, so it jumps to its new layout and keeps that
         * jump as a drag offset, which release wouldn't animate away as
         * drag is now disabled.
         */ if (prevDrag && !drag) this.controls.stop(undefined, undefined, prevDrag);
    }
    unmount() {
        this.removeGroupControls();
        this.removeListeners();
        /**
         * In React 19, during list reorder reconciliation, components may
         * briefly unmount and remount while the drag is still active. If we're
         * actively dragging, we should NOT end the pan session - it will
         * continue tracking pointer events via its window-level listeners.
         *
         * The pan session will be properly cleaned up when:
         * 1. The drag ends naturally (pointerup/pointercancel)
         * 2. The component is truly removed from the DOM
         */ if (!this.controls.isDragging) {
            this.controls.endPanSession();
        }
    }
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/gestures/focus.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusGesture",
    ()=>FocusGesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/Feature.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/events/add-dom-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-utils@14.6.0/node_modules/motion-utils/dist/es/pipe.mjs [app-client] (ecmascript)");
;
;
class FocusGesture extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feature"] {
    constructor(){
        super(...arguments);
        this.isActive = false;
    }
    onFocus() {
        let isFocusVisible = false;
        /**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */ try {
            isFocusVisible = this.node.current.matches(":focus-visible");
        } catch (e) {
            isFocusVisible = true;
        }
        if (!isFocusVisible || !this.node.animationState) return;
        this.node.animationState.setActive("whileFocus", true);
        this.isActive = true;
    }
    onBlur() {
        if (!this.isActive || !this.node.animationState) return;
        this.node.animationState.setActive("whileFocus", false);
        this.isActive = false;
    }
    mount() {
        this.unmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$pipe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDomEvent"])(this.node.current, "focus", ()=>this.onFocus()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$dom$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDomEvent"])(this.node.current, "blur", ()=>this.onBlur()));
    }
    unmount() {}
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/gestures/hover.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HoverGesture",
    ()=>HoverGesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/Feature.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$hover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/gestures/hover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/events/event-info.mjs [app-client] (ecmascript)");
;
function handleHoverEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.animationState && props.whileHover) {
        node.animationState.setActive("whileHover", lifecycle === "Start");
    }
    const eventName = "onHover" + lifecycle;
    const callback = props[eventName];
    if (callback) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(()=>callback(event, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractEventInfo"])(event)));
    }
}
class HoverGesture extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feature"] {
    mount() {
        const { current } = this.node;
        if (!current) return;
        this.unmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$hover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hover"])(current, (_element, startEvent)=>{
            handleHoverEvent(this.node, startEvent, "Start");
            return (endEvent)=>handleHoverEvent(this.node, endEvent, "End");
        });
    }
    unmount() {}
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/gestures/pan/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanGesture",
    ()=>PanGesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/Feature.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$pan$2f$PanSession$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/gestures/pan/PanSession.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/events/add-pointer-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-utils@14.6.0/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$get$2d$context$2d$window$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/get-context-window.mjs [app-client] (ecmascript)");
;
;
;
const asyncHandler = (handler)=>(event, info)=>{
        if (handler) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(()=>handler(event, info), false, true);
        }
    };
class PanGesture extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feature"] {
    constructor(){
        super(...arguments);
        this.removePointerDownListener = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    }
    onPointerDown(pointerDownEvent) {
        this.session = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$pan$2f$PanSession$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanSession"](pointerDownEvent, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$get$2d$context$2d$window$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContextWindow"])(this.node)
        });
    }
    createPanHandlers() {
        const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
        return {
            onSessionStart: asyncHandler(onPanSessionStart),
            onStart: asyncHandler(onPanStart),
            onMove: asyncHandler(onPan),
            onEnd: (event, info)=>{
                delete this.session;
                if (onPanEnd) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(()=>onPanEnd(event, info));
                }
            }
        };
    }
    mount() {
        this.removePointerDownListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$add$2d$pointer$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPointerEvent"])(this.node.current, "pointerdown", (event)=>this.onPointerDown(event));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener();
        this.session && this.session.end();
    }
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/gestures/press.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PressGesture",
    ()=>PressGesture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/Feature.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/gestures/press/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/events/event-info.mjs [app-client] (ecmascript)");
;
function handlePressEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.current instanceof HTMLButtonElement && node.current.disabled) {
        return;
    }
    if (node.animationState && props.whileTap) {
        node.animationState.setActive("whileTap", lifecycle === "Start");
    }
    const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
    const callback = props[eventName];
    if (callback) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(()=>callback(event, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$events$2f$event$2d$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractEventInfo"])(event)));
    }
}
class PressGesture extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feature"] {
    mount() {
        const { current } = this.node;
        if (!current) return;
        const { globalTapTarget, propagate } = this.node.props;
        this.unmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$gestures$2f$press$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["press"])(current, (_element, startEvent)=>{
            handlePressEvent(this.node, startEvent, "Start");
            return (endEvent, { success })=>handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
        }, {
            useGlobalTarget: globalTapTarget,
            stopPropagation: propagate?.tap === false
        });
    }
    unmount() {}
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExitAnimationFeature",
    ()=>ExitAnimationFeature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/Feature.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$dynamic$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs [app-client] (ecmascript)");
;
let id = 0;
class ExitAnimationFeature extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feature"] {
    constructor(){
        super(...arguments);
        this.id = id++;
    }
    update() {
        const { presenceContext, prevPresenceContext, animationState } = this.node;
        if (!presenceContext || !animationState) return;
        const { isPresent, onExitComplete } = presenceContext;
        const prevIsPresent = prevPresenceContext?.isPresent;
        if (isPresent === prevIsPresent) return;
        if (isPresent && prevIsPresent === false) {
            /**
             * When re-entering after the exit completed (element is at
             * rest), replay the enter animation from initial.
             */ if (this.exit === true) {
                const { initial } = this.node.getProps();
                if (initial && !Array.isArray(initial)) {
                    const { transition, transitionEnd, ...target } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$dynamic$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariant"])(this.node, initial) || {};
                    for(const key in target){
                        this.node.getValue(key)?.jump(target[key]);
                    }
                }
                /**
                 * A re-entering element is no longer an initial child, so
                 * AnimatePresence's initial={false} mustn't block its enter.
                 */ this.node.blockInitialAnimation = false;
                animationState.reset();
                animationState.animateChanges();
            } else {
                animationState.setActive("exit", false);
            }
            this.exit = undefined;
            return;
        }
        const exit = this.exit = animationState.setActive("exit", !isPresent);
        if (onExitComplete && !isPresent) {
            exit.then(()=>{
                /**
                 * An exit can resolve after the element has re-entered, e.g.
                 * when its final tick lands in the stop() of the enter.
                 */ if (this.exit !== exit) return;
                this.exit = true;
                onExitComplete(this.id);
            });
        }
    }
    mount() {
        const { register, onExitComplete } = this.node.presenceContext || {};
        if (onExitComplete) {
            onExitComplete(this.id);
        }
        if (register) {
            this.unmount = register(this.id, this.node);
        }
    }
    unmount() {}
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/animation/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationFeature",
    ()=>AnimationFeature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/Feature.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$animation$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/utils/animation-state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs [app-client] (ecmascript)");
;
class AnimationFeature extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feature"] {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */ constructor(node){
        super(node);
        node.animationState || (node.animationState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$animation$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnimationState"])(node));
    }
    updateAnimationControlsSubscription() {
        const { animate } = this.node.getProps();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnimationControls"])(animate)) {
            this.unmountControls = animate.subscribe(this.node);
        }
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */ mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate } = this.node.getProps();
        const { animate: prevAnimate } = this.node.prevProps || {};
        if (animate !== prevAnimate) {
            this.updateAnimationControlsSubscription();
        }
    }
    unmount() {
        this.node.animationState.reset();
        this.unmountControls?.();
    }
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/animations.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animations",
    ()=>animations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animation$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/animation/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animation$2f$exit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs [app-client] (ecmascript)");
;
;
const animations = {
    animation: {
        Feature: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animation$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationFeature"]
    },
    exit: {
        Feature: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animation$2f$exit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExitAnimationFeature"]
    }
};
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/definitions.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInitializedFeatureDefinitions",
    ()=>getInitializedFeatureDefinitions,
    "initFeatureDefinitions",
    ()=>initFeatureDefinitions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/VisualElement.mjs [app-client] (ecmascript)");
;
const featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag"
    ],
    exit: [
        "exit"
    ],
    drag: [
        "drag",
        "dragControls"
    ],
    focus: [
        "whileFocus"
    ],
    hover: [
        "whileHover",
        "onHoverStart",
        "onHoverEnd"
    ],
    tap: [
        "whileTap",
        "onTap",
        "onTapStart",
        "onTapCancel"
    ],
    pan: [
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd"
    ],
    inView: [
        "whileInView",
        "onViewportEnter",
        "onViewportLeave"
    ],
    layout: [
        "layout",
        "layoutId"
    ]
};
let isInitialized = false;
/**
 * Initialize feature definitions with isEnabled checks.
 * This must be called before any motion components are rendered.
 */ function initFeatureDefinitions() {
    if (isInitialized) return;
    const initialFeatureDefinitions = {};
    for(const key in featureProps){
        initialFeatureDefinitions[key] = {
            isEnabled: (props)=>featureProps[key].some((name)=>!!props[name])
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFeatureDefinitions"])(initialFeatureDefinitions);
    isInitialized = true;
}
/**
 * Get the current feature definitions, initializing if needed.
 */ function getInitializedFeatureDefinitions() {
    initFeatureDefinitions();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeatureDefinitions"])();
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/drag.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drag",
    ()=>drag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/gestures/drag/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$pan$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/gestures/pan/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2f$MeasureLayout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs [app-client] (ecmascript)");
;
;
;
;
const drag = {
    pan: {
        Feature: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$pan$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanGesture"]
    },
    drag: {
        Feature: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragGesture"],
        ProjectionNode: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLProjectionNode"],
        MeasureLayout: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2f$MeasureLayout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeasureLayout"]
    }
};
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/gestures.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gestureAnimations",
    ()=>gestureAnimations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$hover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/gestures/hover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$focus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/gestures/focus.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$press$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/gestures/press.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs [app-client] (ecmascript)");
;
;
;
;
const gestureAnimations = {
    inView: {
        Feature: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InViewFeature"]
    },
    tap: {
        Feature: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$press$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PressGesture"]
    },
    focus: {
        Feature: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$focus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusGesture"]
    },
    hover: {
        Feature: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$hover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverGesture"]
    }
};
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/layout.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layout",
    ()=>layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2f$MeasureLayout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs [app-client] (ecmascript)");
;
;
const layout = {
    layout: {
        ProjectionNode: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$HTMLProjectionNode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLProjectionNode"],
        MeasureLayout: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2f$MeasureLayout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeasureLayout"]
    }
};
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeasureLayout",
    ()=>MeasureLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/projection/node/state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/frameloop/microtask.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$SwitchLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
/**
 * Track whether we've taken any snapshots yet. If not,
 * we can safely skip notification of didUpdate.
 *
 * Difficult to capture in a test but to prevent flickering
 * we must set this to true either on update or unmount.
 * Running `next-env/layout-id` in Safari will show this behaviour if broken.
 */ let hasTakenAnySnapshot = false;
/**
 * The projection node is created with the props from the component's first
 * render, so keep these in sync as `layout` can change (or be enabled) later.
 */ const layoutOptions = ({ layout, layoutDependency })=>({
        layout,
        layoutDependency,
        animationType: typeof layout === "string" ? layout : "both"
    });
class MeasureLayoutWithContext extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */ componentDidMount() {
        const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
        const { projection } = visualElement;
        if (projection) {
            if (layoutGroup.group) layoutGroup.group.add(projection);
            if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
                switchLayoutGroup.register(projection);
            }
            if (hasTakenAnySnapshot) {
                projection.root.didUpdate();
            }
            projection.addEventListener("animationComplete", ()=>{
                this.safeToRemove();
            });
            projection.setOptions({
                ...projection.options,
                ...layoutOptions(this.props),
                onExitComplete: ()=>this.safeToRemove()
            });
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalProjectionState"].hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
        const { layout, layoutDependency, visualElement, drag, isPresent } = this.props;
        const { projection } = visualElement;
        if (!projection) return null;
        /**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */ projection.isPresent = isPresent;
        if (prevProps.layoutDependency !== layoutDependency || prevProps.layout !== layout) {
            projection.setOptions({
                ...projection.options,
                ...layoutOptions(this.props)
            });
        }
        hasTakenAnySnapshot = true;
        if (drag || prevProps.layoutDependency !== layoutDependency || layoutDependency === undefined || prevProps.isPresent !== isPresent) {
            projection.willUpdate();
        } else {
            this.safeToRemove();
        }
        if (prevProps.isPresent !== isPresent) {
            if (isPresent) {
                projection.promote();
            } else if (!projection.relegate()) {
                /**
                 * If there's another stack member taking over from this one,
                 * it's in charge of the exit animation and therefore should
                 * be in charge of the safe to remove. Otherwise we call it here.
                 */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].postRender(()=>{
                    const stack = projection.getStack();
                    if (!stack || !stack.members.length) {
                        this.safeToRemove();
                    }
                });
            }
        }
        return null;
    }
    componentDidUpdate() {
        const { visualElement, layoutAnchor } = this.props;
        const { projection } = visualElement;
        if (projection) {
            projection.options.layoutAnchor = layoutAnchor;
            projection.root.didUpdate();
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microtask"].postRender(()=>{
                if (!projection.currentAnimation && projection.isLead()) {
                    this.safeToRemove();
                }
            });
        }
    }
    componentWillUnmount() {
        const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
        const { projection } = visualElement;
        hasTakenAnySnapshot = true;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
            if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
        }
    }
    safeToRemove() {
        const { safeToRemove } = this.props;
        safeToRemove && safeToRemove();
    }
    render() {
        return null;
    }
}
function MeasureLayout(props) {
    const [isPresent, safeToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePresence"])();
    const layoutGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroupContext"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MeasureLayoutWithContext, {
        ...props,
        layoutGroup: layoutGroup,
        switchLayoutGroup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$SwitchLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchLayoutGroupContext"]),
        isPresent: isPresent,
        safeToRemove: safeToRemove
    });
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/load-features.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadFeatures",
    ()=>loadFeatures
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/VisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$definitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/definitions.mjs [app-client] (ecmascript)");
;
;
function loadFeatures(features) {
    const featureDefinitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$definitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializedFeatureDefinitions"])();
    for(const key in features){
        featureDefinitions[key] = {
            ...featureDefinitions[key],
            ...features[key]
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$VisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFeatureDefinitions"])(featureDefinitions);
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InViewFeature",
    ()=>InViewFeature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/Feature.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$viewport$2f$observers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs [app-client] (ecmascript)");
;
;
const thresholdNames = {
    some: 0,
    all: 1
};
class InViewFeature extends __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$Feature$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Feature"] {
    constructor(){
        super(...arguments);
        this.hasEnteredView = false;
        this.isInView = false;
    }
    startObserver() {
        this.stopObserver?.();
        const { viewport = {} } = this.node.getProps();
        const { root, margin: rootMargin, amount = "some", once } = viewport;
        const options = {
            root: root ? root.current : undefined,
            rootMargin,
            threshold: typeof amount === "number" ? amount : thresholdNames[amount]
        };
        const onIntersectionUpdate = (entry)=>{
            const { isIntersecting } = entry;
            /**
             * If there's been no change in the viewport state, early return.
             */ if (this.isInView === isIntersecting) return;
            this.isInView = isIntersecting;
            /**
             * Handle hasEnteredView. If this is only meant to run once, and
             * element isn't visible, early return. Otherwise set hasEnteredView to true.
             */ if (once && !isIntersecting && this.hasEnteredView) {
                return;
            } else if (isIntersecting) {
                this.hasEnteredView = true;
            }
            if (this.node.animationState) {
                this.node.animationState.setActive("whileInView", isIntersecting);
            }
            /**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */ const { onViewportEnter, onViewportLeave } = this.node.getProps();
            const callback = isIntersecting ? onViewportEnter : onViewportLeave;
            callback && callback(entry);
        };
        this.stopObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$viewport$2f$observers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeIntersection"])(this.node.current, options, onIntersectionUpdate);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver === "undefined") return;
        const { props, prevProps } = this.node;
        const hasOptionsChanged = [
            "amount",
            "margin",
            "root"
        ].some(hasViewportOptionChanged(props, prevProps));
        if (hasOptionsChanged) {
            this.startObserver();
        }
    }
    unmount() {
        this.stopObserver?.();
        this.hasEnteredView = false;
        this.isInView = false;
    }
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name)=>viewport[name] !== prevViewport[name];
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "observeIntersection",
    ()=>observeIntersection
]);
/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */ const observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */ const observers = new WeakMap();
const fireObserverCallback = (entry)=>{
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
};
const fireAllObserverCallbacks = (entries)=>{
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    /**
     * If we don't have an observer lookup map for this root, create one.
     */ if (!observers.has(lookupRoot)) {
        observers.set(lookupRoot, {});
    }
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */ if (!rootObservers[key]) {
        rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
            root,
            ...options
        });
    }
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return ()=>{
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMotionComponent",
    ()=>createMotionComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$root$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/projection/node/root.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-utils@14.6.0/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LazyContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/LazyContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$create$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$use$2d$render$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/dom/use-render.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$is$2d$svg$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$use$2d$html$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$use$2d$svg$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$definitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/definitions.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$load$2d$features$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/load-features.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$symbol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/utils/symbol.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$motion$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */ function createMotionComponent(Component, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
    preloadedFeatures && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$load$2d$features$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadFeatures"])(preloadedFeatures);
    /**
     * Determine whether to use SVG or HTML rendering based on:
     * 1. Explicit `type` option (highest priority)
     * 2. Auto-detection via `isSVGComponent`
     */ const isSVG = type ? type === "svg" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$is$2d$svg$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGComponent"])(Component);
    const useVisualState = isSVG ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$use$2d$svg$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSVGVisualState"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$use$2d$html$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHTMLVisualState"];
    function MotionDOMComponent(props, externalRef) {
        /**
         * If we need to measure the element we load this functionality in a
         * separate class component in order to gain access to getSnapshotBeforeUpdate.
         */ let MeasureLayout;
        const layoutId = useLayoutId(props);
        /**
         * An element that mounts with the layoutId of one that's already
         * rendered takes over from it with a shared layout animation, so
         * visually it has already entered. Mount it as if initial={false}
         * rather than replaying its entrance.
         *
         * Only when it has an initial: without one there's no entrance to
         * skip, and initial={false} would make its animate values its base
         * values, so removing them later wouldn't return it to its defaults.
         */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
            "createMotionComponent.MotionDOMComponent.useConstant": ()=>!!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$projection$2f$node$2f$root$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rootProjectionNode"].current?.sharedNodes.get(layoutId)?.lead && props.initial
        }["createMotionComponent.MotionDOMComponent.useConstant"])) {
            props = {
                ...props,
                initial: false
            };
        }
        const configAndProps = {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]),
            ...props,
            layoutId
        };
        const { isStatic, isValidProp } = configAndProps;
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$create$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateMotionContext"])(props);
        const visualState = useVisualState(props, isStatic);
        if (!isStatic && typeof window !== "undefined") {
            useStrictMode(configAndProps, preloadedFeatures);
            const layoutProjection = getProjectionFunctionality(configAndProps);
            MeasureLayout = layoutProjection.MeasureLayout;
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */ context.visualElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVisualElement"])(Component, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */ return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionContext"].Provider, {
            value: context,
            children: [
                MeasureLayout && context.visualElement ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MeasureLayout, {
                    visualElement: context.visualElement,
                    ...configAndProps
                }) : null,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$use$2d$render$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])(Component, props, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$motion$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionRef"])(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG, isValidProp)
            ]
        });
    }
    MotionDOMComponent.displayName = `motion.${typeof Component === "string" ? Component : `create(${Component.displayName ?? Component.name ?? ""})`}`;
    const ForwardRefMotionComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(MotionDOMComponent);
    ForwardRefMotionComponent[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$symbol$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionComponentSymbol"]] = Component;
    return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
    const layoutGroupId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroupContext"]).id;
    return layoutGroupId && layoutId !== undefined ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
    const isStrict = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LazyContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyContext"]).strict;
    /**
     * If we're in development mode, check to make sure we're not rendering a motion component
     * as a child of LazyMotion, as this will break the file-size benefits of using it.
     */ if (("TURBOPACK compile-time value", "development") !== "production" && preloadedFeatures && isStrict) {
        const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
        configAndProps.ignoreStrict ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warning"])(false, strictMessage, "lazy-strict-mode") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(false, strictMessage, "lazy-strict-mode");
    }
}
function getProjectionFunctionality(props) {
    const featureDefinitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$definitions$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitializedFeatureDefinitions"])();
    const { drag, layout } = featureDefinitions;
    if (!drag && !layout) return {};
    const combined = {
        ...drag,
        ...layout
    };
    return {
        MeasureLayout: drag?.isEnabled(props) || layout?.isEnabled(props) ? combined.MeasureLayout : undefined,
        ProjectionNode: combined.ProjectionNode
    };
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/utils/symbol.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "motionComponentSymbol",
    ()=>motionComponentSymbol
]);
const motionComponentSymbol = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMotionRef",
    ()=>useMotionRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */ function useMotionRef(visualState, visualElement, externalRef) {
    /**
     * Store externalRef in a ref to avoid including it in the useCallback
     * dependency array. Including externalRef in dependencies causes issues
     * with libraries like Radix UI that create new callback refs on each render
     * when using asChild - this would cause the callback to be recreated,
     * triggering element remounts and breaking AnimatePresence exit animations.
     */ const externalRefContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(externalRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])({
        "useMotionRef.useInsertionEffect": ()=>{
            externalRefContainer.current = externalRef;
        }
    }["useMotionRef.useInsertionEffect"]);
    // Store cleanup function returned by callback refs (React 19 feature)
    const refCleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMotionRef.useCallback": (instance)=>{
            if (instance) {
                visualState.onMount?.(instance);
            }
            if (visualElement) {
                instance ? visualElement.mount(instance) : visualElement.unmount();
            }
            const ref = externalRefContainer.current;
            if (typeof ref === "function") {
                if (instance) {
                    const cleanup = ref(instance);
                    if (typeof cleanup === "function") {
                        refCleanup.current = cleanup;
                    }
                } else if (refCleanup.current) {
                    refCleanup.current();
                    refCleanup.current = null;
                } else {
                    ref(instance);
                }
            } else if (ref) {
                ref.current = instance;
            }
        }
    }["useMotionRef.useCallback"], [
        visualElement
    ]);
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVisualElement",
    ()=>useVisualElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/animation/optimized-appear/data-id.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LazyContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/LazyContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/PresenceContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$SwitchLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$is$2d$ref$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function useVisualElement(Component, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
    const { visualElement: parent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionContext"]);
    const lazyContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LazyContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyContext"]);
    const presenceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceContext"]);
    const motionConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    const reducedMotionConfig = motionConfig.reducedMotion;
    const skipAnimations = motionConfig.skipAnimations;
    const visualElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /**
     * Track whether the component has been through React's commit phase.
     * Used to detect when LazyMotion features load after the component has mounted.
     */ const hasMountedOnce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */ createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState,
            parent,
            props,
            presenceContext,
            blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
            reducedMotionConfig,
            skipAnimations,
            isSVG
        });
        /**
         * If the component has already mounted before features loaded (e.g. via
         * LazyMotion with async feature loading), we need to force the initial
         * animation to run. Otherwise state changes that occurred before features
         * loaded will be lost and the element will snap to its final state.
         */ if (hasMountedOnce.current && visualElementRef.current) {
            visualElementRef.current.manuallyAnimateOnMount = true;
        }
    }
    const visualElement = visualElementRef.current;
    /**
     * Load Motion gesture and animation features. These are rendered as renderless
     * components so each feature can optionally make use of React lifecycle methods.
     */ const initialLayoutGroupConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$SwitchLayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchLayoutGroupContext"]);
    if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
        createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])({
        "useVisualElement.useInsertionEffect": ()=>{
            /**
         * Skip the update if the visual element was created with these props.
         * This isn't gated on the layout effect below having run, as a hidden
         * <Activity> runs insertion effects but not layout effects, and
         * props from renders made while hidden must still reach the element.
         */ if (visualElement && visualElement.props !== props) {
                visualElement.update(props, presenceContext);
            }
        }
    }["useVisualElement.useInsertionEffect"]);
    /**
     * Cache this value as we want to know whether HandoffAppearAnimations
     * was present on initial render - it will be deleted after this.
     */ const optimisedAppearId = props[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$optimized$2d$appear$2f$data$2d$id$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizedAppearDataAttribute"]];
    const wantsHandoff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Boolean(optimisedAppearId) && typeof window !== "undefined" && !window.MotionHandoffIsComplete?.(optimisedAppearId) && window.MotionHasOptimisedAnimation?.(optimisedAppearId));
    /**
     * Layout effects re-run when a hidden Suspense/Activity boundary is
     * revealed, but passive effects only re-run if this component re-renders
     * (not the case for memoized elements). Replay animations on every
     * reconnection. Must be declared before the effect that sets hasMountedOnce.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useVisualElement.useIsomorphicLayoutEffect": ()=>{
            if (!hasMountedOnce.current || !visualElement) return;
            visualElement.animationState?.animateChanges();
            visualElement.enteringChildren = undefined;
        }
    }["useVisualElement.useIsomorphicLayoutEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useVisualElement.useIsomorphicLayoutEffect": ()=>{
            /**
         * Track that this component has mounted. This is used to detect when
         * LazyMotion features load after the component has already committed.
         */ hasMountedOnce.current = true;
            if (!visualElement) return;
            window.MotionIsMounted = true;
            visualElement.updateFeatures();
            visualElement.scheduleRenderMicrotask();
            /**
         * Ideally this function would always run in a useEffect.
         *
         * However, if we have optimised appear animations to handoff from,
         * it needs to happen synchronously to ensure there's no flash of
         * incorrect styles in the event of a hydration error.
         *
         * So if we detect a situation where optimised appear animations
         * are running, we use useLayoutEffect to trigger animations.
         */ if (wantsHandoff.current && visualElement.animationState) {
                visualElement.animationState.animateChanges();
            }
        }
    }["useVisualElement.useIsomorphicLayoutEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVisualElement.useEffect": ()=>{
            if (!visualElement) return;
            if (!wantsHandoff.current && visualElement.animationState) {
                visualElement.animationState.animateChanges();
            }
            if (wantsHandoff.current) {
                // This ensures all future calls to animateChanges() in this component will run in useEffect
                queueMicrotask({
                    "useVisualElement.useEffect": ()=>{
                        window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
                    }
                }["useVisualElement.useEffect"]);
                wantsHandoff.current = false;
            }
            /**
         * Now we've finished triggering animations for this element we
         * can wipe the enteringChildren set for the next render.
         */ visualElement.enteringChildren = undefined;
        }
    }["useVisualElement.useEffect"]);
    return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
    const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, layoutAnchor, layoutCrossfade } = props;
    const projection = visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? undefined : getClosestProjectingNode(visualElement.parent));
    projection.setOptions({
        layoutId,
        layout,
        alwaysMeasureLayout: Boolean(drag) || dragConstraints && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$is$2d$ref$2d$object$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRefObject"])(dragConstraints),
        visualElement,
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */ animationType: typeof layout === "string" ? layout : "both",
        initialPromotionConfig,
        crossfade: layoutCrossfade,
        layoutScroll,
        layoutRoot,
        layoutAnchor
    });
    /**
     * This node will take over from its layoutId's current lead, so snapshot
     * the lead now, while rendering. By the time the lead unmounts (or this
     * node mounts) React may already have committed DOM changes that come
     * before it in the tree, like a sibling changing height, and a snapshot
     * taken then starts the animation from a position never seen on screen.
     *
     * If React discards this render (e.g. it suspends), nothing else
     * completes the update, so check it after the next frame as an
     * unmounting node does.
     */ const lead = projection.getStack()?.lead;
    if (lead && !projection.root.isUpdateBlocked()) {
        lead.willUpdate();
        lead.scheduleCheckAfterUnmount();
    }
}
function getClosestProjectingNode(visualElement) {
    if (!visualElement) return undefined;
    return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "makeUseVisualState",
    ()=>makeUseVisualState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$controlling$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/context/PresenceContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function makeState({ scrapeMotionValuesFromProps, createRenderState }, props, context, presenceContext) {
    const state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState()
    };
    return state;
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for(const key in motionValues){
        values[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$resolve$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMotionValue"])(motionValues[key]);
    }
    let { initial, animate } = props;
    const isControllingVariants$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$controlling$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isControllingVariants"])(props);
    const isVariantNode$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$controlling$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVariantNode"])(props);
    if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
        if (initial === undefined) initial = context.initial;
        if (animate === undefined) animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet && typeof variantToSet !== "boolean" && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$animation$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnimationControls"])(variantToSet)) {
        const list = Array.isArray(variantToSet) ? variantToSet : [
            variantToSet
        ];
        for(let i = 0; i < list.length; i++){
            const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$resolve$2d$variants$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveVariantFromProps"])(props, list[i]);
            if (resolved) {
                const { transitionEnd, transition, ...target } = resolved;
                for(const key in target){
                    let valueTarget = target[key];
                    if (Array.isArray(valueTarget)) {
                        /**
                         * Take final keyframe if the initial animation is blocked because
                         * we want to initialise at the end of that blocked animation.
                         */ const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
                        valueTarget = valueTarget[index];
                    }
                    if (valueTarget !== null) {
                        values[key] = valueTarget;
                    }
                }
                for(const key in transitionEnd){
                    values[key] = transitionEnd[key];
                }
            }
        }
    }
    return values;
}
const makeUseVisualState = (config)=>(props, isStatic)=>{
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionContext$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionContext"]);
        const presenceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceContext"]);
        const make = ()=>makeState(config, props, context, presenceContext);
        return isStatic ? make() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])(make);
    };
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isValidMotionProp",
    ()=>isValidMotionProp
]);
/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */ const validMotionProps = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "propagate",
    "ignoreStrict",
    "viewport"
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */ function isValidMotionProp(key) {
    return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/components/create-proxy.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMotionProxy",
    ()=>createMotionProxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-utils@14.6.0/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/index.mjs [app-client] (ecmascript)");
;
;
function createMotionProxy(preloadedFeatures, createVisualElement) {
    if (typeof Proxy === "undefined") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMotionComponent"];
    }
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */ const componentCache = new Map();
    const factory = (Component, options)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMotionComponent"])(Component, options, preloadedFeatures, createVisualElement);
    };
    /**
     * Support for deprecated`motion(Component)` pattern
     */ const deprecatedFactoryFunction = (Component, options)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$utils$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"])(false, "motion() is deprecated. Use motion.create() instead.");
        }
        return factory(Component, options);
    };
    return new Proxy(deprecatedFactoryFunction, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */ get: (_target, key)=>{
            if (key === "create") return factory;
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */ if (!componentCache.has(key)) {
                componentCache.set(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMotionComponent"])(key, undefined, preloadedFeatures, createVisualElement));
            }
            return componentCache.get(key);
        }
    });
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/components/motion/feature-bundle.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "featureBundle",
    ()=>featureBundle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/animations.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$drag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/drag.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$gestures$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/gestures.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/features/layout.mjs [app-client] (ecmascript)");
;
;
;
;
const featureBundle = /* @__PURE__ */ Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$animations$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animations"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$gestures$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gestureAnimations"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$drag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drag"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$features$2f$layout$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layout"]);
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "motion",
    ()=>motion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$create$2d$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/components/create-proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$feature$2d$bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/components/motion/feature-bundle.mjs [app-client] (ecmascript)");
;
;
;
const motion = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$create$2d$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMotionProxy"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$feature$2d$bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureBundle"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$create$2d$visual$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDomVisualElement"]);
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDomVisualElement",
    ()=>createDomVisualElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$SVGVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$HTMLVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$is$2d$svg$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs [app-client] (ecmascript)");
;
;
;
const createDomVisualElement = (Component, options)=>{
    /**
     * Use explicit isSVG override if provided, otherwise auto-detect
     */ const isSVG = options.isSVG ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$is$2d$svg$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGComponent"])(Component);
    return isSVG ? new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$SVGVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SVGVisualElement"](options) : new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$HTMLVisualElement$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTMLVisualElement"](options, {
        allowProjection: Component !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]
    });
};
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/dom/use-render.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRender",
    ()=>useRender
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/html/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/svg/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$is$2d$svg$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function useRender(Component, props, ref, { latestValues }, isStatic, forwardMotionProps = false, isSVG, isValidProp) {
    const useVisualProps = isSVG ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$is$2d$svg$2d$component$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGComponent"])(Component) ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSVGProps"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHTMLProps"];
    const visualProps = useVisualProps(props, latestValues, isStatic, Component);
    const filteredProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$utils$2f$filter$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterProps"])(props, typeof Component === "string", forwardMotionProps, isValidProp);
    const elementProps = Component !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"] ? {
        ...filteredProps,
        ...visualProps,
        ref
    } : {};
    /**
     * If component has been handed a motion value as its child,
     * memoise its initial value and render that. Subsequent updates
     * will be handled by the onChange handler
     */ const { children } = props;
    const renderedChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useRender.useMemo[renderedChildren]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(children) ? children.get() : children
    }["useRender.useMemo[renderedChildren]"], [
        children
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Component, {
        ...elementProps,
        children: renderedChildren
    });
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterProps",
    ()=>filterProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$valid$2d$prop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs [app-client] (ecmascript)");
;
;
function shouldForward(key, isValidProp) {
    return key.startsWith("on") ? !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$valid$2d$prop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidMotionProp"])(key) : isValidProp?.(key) ?? !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$valid$2d$prop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidMotionProp"])(key);
}
function filterProps(props, isDom, forwardMotionProps, isValidProp) {
    const filteredProps = {};
    for(const key in props){
        /**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */ if (key === "values" && typeof props.values === "object") continue;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(props[key])) continue;
        if (shouldForward(key, isValidProp) || forwardMotionProps === true && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$valid$2d$prop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidMotionProp"])(key) || !isDom && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$valid$2d$prop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidMotionProp"])(key) || props["draggable"] && key.startsWith("onDrag")) {
            filteredProps[key] = props[key];
        }
    }
    return filteredProps;
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSVGComponent",
    ()=>isSVGComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$lowercase$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs [app-client] (ecmascript)");
;
function isSVGComponent(Component) {
    if (/**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */ typeof Component !== "string" || /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */ Component.includes("-")) {
        return false;
    } else if (/**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */ __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$lowercase$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lowercaseSVGElements"].indexOf(Component) > -1 || /**
         * If it contains a capital letter, it's an SVG component
         */ /[A-Z]/u.test(Component)) {
        return true;
    }
    return false;
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHTMLVisualState",
    ()=>useHTMLVisualState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__scrapeMotionValuesFromProps__as__scrapeHTMLMotionValuesFromProps$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs [app-client] (ecmascript) <export scrapeMotionValuesFromProps as scrapeHTMLMotionValuesFromProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$create$2d$render$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const useHTMLVisualState = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeUseVisualState"])({
    scrapeMotionValuesFromProps: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__scrapeMotionValuesFromProps__as__scrapeHTMLMotionValuesFromProps$3e$__["scrapeHTMLMotionValuesFromProps"],
    createRenderState: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$create$2d$render$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHtmlRenderState"]
});
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/html/use-props.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copyRawValuesOnly",
    ()=>copyRawValuesOnly,
    "useHTMLProps",
    ()=>useHTMLProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$forced$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$create$2d$render$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function copyRawValuesOnly(target, source, props) {
    for(const key in source){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(source[key]) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$utils$2f$is$2d$forced$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isForcedMotionValue"])(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useInitialMotionValues.useMemo": ()=>{
            const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$create$2d$render$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHtmlRenderState"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$build$2d$styles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHTMLStyles"])(state, visualState, transformTemplate);
            return Object.assign({}, state.vars, state.style);
        }
    }["useInitialMotionValues.useMemo"], [
        visualState
    ]);
}
function useStyle(props, visualState) {
    const styleProp = props.style || {};
    const style = {};
    /**
     * Copy non-Motion Values straight into style
     */ copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState));
    return style;
}
function useHTMLProps(props, visualState) {
    // The `any` isn't ideal but it is the type of createElement props argument
    const htmlProps = {};
    const style = useStyle(props, visualState);
    if (props.drag && props.dragListener !== false) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
        // Disable scrolling on the draggable direction
        style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === undefined && (props.onTap || props.onTapStart || props.whileTap)) {
        htmlProps.tabIndex = 0;
    }
    htmlProps.style = style;
    return htmlProps;
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHtmlRenderState",
    ()=>createHtmlRenderState
]);
const createHtmlRenderState = ()=>({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lowercaseSVGElements",
    ()=>lowercaseSVGElements
]);
/**
 * We keep these listed separately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */ const lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view"
];
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/svg/use-props.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSVGProps",
    ()=>useSVGProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$build$2d$attrs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$is$2d$svg$2d$tag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/html/use-props.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$create$2d$render$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function useSVGProps(props, visualState, _isStatic, Component) {
    const visualProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSVGProps.useMemo[visualProps]": ()=>{
            const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$create$2d$render$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSvgRenderState"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$build$2d$attrs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSVGAttrs"])(state, visualState, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$is$2d$svg$2d$tag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSVGTag"])(Component), props.transformTemplate, props.style);
            return {
                ...state.attrs,
                style: {
                    ...state.style
                }
            };
        }
    }["useSVGProps.useMemo[visualProps]"], [
        visualState
    ]);
    if (props.style) {
        /**
         * Build a fresh style each render rather than writing back into
         * the memoised visualProps, which would carry the previous
         * render's raw styles over (and above) the latest ones.
         */ const style = {};
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$use$2d$props$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyRawValuesOnly"])(style, props.style, props);
        return {
            ...visualProps,
            style: {
                ...style,
                ...visualProps.style
            }
        };
    }
    return visualProps;
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSVGVisualState",
    ()=>useSVGVisualState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__scrapeMotionValuesFromProps__as__scrapeSVGMotionValuesFromProps$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/motion-dom@14.6.0/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs [app-client] (ecmascript) <export scrapeMotionValuesFromProps as scrapeSVGMotionValuesFromProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$create$2d$render$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const useSVGVisualState = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$motion$2f$utils$2f$use$2d$visual$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeUseVisualState"])({
    scrapeMotionValuesFromProps: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$14$2e$6$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$scrape$2d$motion$2d$values$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__scrapeMotionValuesFromProps__as__scrapeSVGMotionValuesFromProps$3e$__["scrapeSVGMotionValuesFromProps"],
    createRenderState: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$svg$2f$utils$2f$create$2d$render$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSvgRenderState"]
});
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSvgRenderState",
    ()=>createSvgRenderState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$create$2d$render$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs [app-client] (ecmascript)");
;
const createSvgRenderState = ()=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$html$2f$utils$2f$create$2d$render$2d$state$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHtmlRenderState"])(),
        attrs: {}
    });
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/get-context-window.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getContextWindow",
    ()=>getContextWindow
]);
// Fixes https://github.com/motiondivision/motion/issues/2270
const getContextWindow = ({ current })=>{
    return current ? current.ownerDocument.defaultView : null;
};
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/is-browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBrowser",
    ()=>isBrowser
]);
const isBrowser = typeof window !== "undefined";
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isRefObject",
    ()=>isRefObject
]);
function isRefObject(ref) {
    return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/**
 * Taken from https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/compose-refs.tsx
 */ /**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== undefined) {
        ref.current = value;
    }
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup === "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        // React <19 will log an error to the console if a callback ref returns a
        // value. We don't use ref cleanups internally so this will only happen if a
        // user's ref callback returns a value, which we only expect if they are
        // using the cleanup functionality added in React 19.
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup === "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function useComposedRefs(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConstant",
    ()=>useConstant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */ function useConstant(init) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}
;
}),
"[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsomorphicLayoutEffect",
    ()=>useIsomorphicLayoutEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.0_@babel+core@7.2_775e0d7ab00b10f2950287173e7bc793/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$is$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/.pnpm/framer-motion@14.6.0_react@19.3.0/node_modules/framer-motion/dist/es/utils/is-browser.mjs [app-client] (ecmascript)");
"use client";
;
;
const useIsomorphicLayoutEffect = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$6$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$is$2d$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$0_$40$babel$2b$core$40$7$2e$2_775e0d7ab00b10f2950287173e7bc793$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
;
}),
]);})()

//# sourceMappingURL=0bab_framer-motion_dist_es_1baj_r8dkeqix._.js.map