//
//  RNQuickLookView.h
//
//  Created by Rahul Jiresal on 7/15/16.
//  Copyright © 2016 Air Computing Inc. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface RNQuickLookView : UIView {
    NSString* _url;
    NSString* _assetFileName;
}

- (instancetype)initWithPreviewItemUrl:(NSString*)url;

@end
